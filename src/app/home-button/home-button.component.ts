import { Component } from '@angular/core';

@Component({
  selector: 'app-home-button',
  template: `
    <div class="flex flex-row justify-center items-center gap-4 mb-4 pb-2">
      <a
        href="/"
        class="w-full items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 focus:outline-none disabled:opacity-25"
      >
        Home
      </a>
    </div>
  `,
})
export class HomeButtonComponent {}
