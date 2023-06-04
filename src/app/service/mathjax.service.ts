import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathJaxService {

  constructor() { }

  loadMathJax(): void {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML';

    const config = 'MathJax.Hub.Config({' +
      'extensions: ["tex2jax.js"],' +
      'jax: ["input/TeX", "output/HTML-CSS"],' +
      'tex2jax: {' +
        'inlineMath: [["$", "$"],["\\\\(","\\\\)"]],' +
        'displayMath: [["$$","$$"],["\\\\[","\\\\]"]],' +
        'processEscapes: true' +
      '},' +
      'messageStyle: "none",' +
      'skipStartupTypeset: true' +
    '});' +
    'MathJax.Hub.Queue(["Typeset", MathJax.Hub]);';

    script.text = config;
    document.head.appendChild(script);
  }
}
