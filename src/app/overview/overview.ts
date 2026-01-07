import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, BehaviorSubject } from 'rxjs';
import { parseMarkdown } from '../../content/markdown.parser';

@Component({
  selector: 'app-overview',
  imports: [AsyncPipe],
  template: `<div class="content" [innerHTML]="contentObservable | async"></div>`,
  styleUrls: ['./overview.css'],
})
export class Overview implements AfterViewInit {
  private content$ = new BehaviorSubject<string>('<p class="loading">Loading…</p>');

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    console.log('Overview constructor');
  }

  ngAfterViewInit(): void {
    console.log('Overview ngAfterViewInit');
    if (!isPlatformBrowser(this.platformId)) return;
    this.loadMarkdown();
  }

  private async loadMarkdown(): Promise<void> {
    try {
      console.log('Fetching overview.md');
      const md = await firstValueFrom(
        this.http.get('/content/overview.md', { responseType: 'text' })
      );
      const html = await parseMarkdown(md);
      console.log('Parsed markdown length:', html?.length);
      this.content$.next(html);
    } catch (err) {
      console.error('Failed to load overview.md', err);
      this.content$.next('<p>Failed to load content.</p>');
    }
  }

  get contentObservable() {
    return this.content$.asObservable();
  }
}
