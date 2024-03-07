const $circle = document.querySelector('section#circle');
const $article = $circle.querySelectorAll('article');

for (let $face of $article) {
    $face.addEventListener('mouseenter', () => {
        $circle.setAttribute('style', 'animation-play-state: paused')
    })
    $face.addEventListener('mouseleave', () => {
        $circle.setAttribute('style', 'animation-play-state: running')
    })
}