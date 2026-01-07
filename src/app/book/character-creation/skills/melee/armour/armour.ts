import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, BehaviorSubject } from 'rxjs';
import { parseMarkdown } from '../../../../../../content/markdown.parser';

@Component({
  selector: 'app-armour',
  imports: [AsyncPipe],
  template: `<div class="content" [innerHTML]="contentObservable | async"></div>`,
  styleUrl: './armour.css',
})
export class Armour implements AfterViewInit {
  private content$ = new BehaviorSubject<string>('<p class="loading">Loading…</p>');

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.loadMarkdown();
  }

  private async loadMarkdown(): Promise<void> {
    try {
      const md = await firstValueFrom(
        this.http.get('/content/book/character-creation/skills/melee/armour.md', {
          responseType: 'text',
        })
      );
      const html = await parseMarkdown(md);
      this.content$.next(html);
    } catch (err) {
      this.content$.next('<p>Failed to load content.</p>');
    }
  }

  get contentObservable() {
    return this.content$.asObservable();
  }
}
