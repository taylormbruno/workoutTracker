init();

async function init() {
    if (location.search.split('=')[1] === undefined) {
        // eslint-disable-next-line no-undef
        const workout = await API.getLastWorkout();
        if (workout) {
            location.search = '?id=' + workout._id;
        } else {
            document.querySelector('#continue-btn').classList.add('d-none')
        }
    }
}

