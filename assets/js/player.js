document.addEventListener('DOMContentLoaded', () => {
    const tracks = document.querySelectorAll('.track');

    tracks.forEach(track => {
        const audio = track.querySelector('audio');
        const btn = track.querySelector('.play-btn');

        btn.addEventListener('click', () => {

            // stop semua track lain
            document.querySelectorAll('audio').forEach(a => {
                if (a !== audio) {
                    a.pause();
                    a.currentTime = 0;
                    a.closest('.track').classList.remove('playing');
                }
            });

            if (audio.paused) {
                audio.play();
                track.classList.add('playing');
                btn.textContent = '⏸';
            } else {
                audio.pause();
                track.classList.remove('playing');
                btn.textContent = '▶';
            }
        });

        audio.addEventListener('ended', () => {
            track.classList.remove('playing');
            btn.textContent = '▶';
        });
    });
});
