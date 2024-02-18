function changeCurrentImage(currentImageArgument, src) {
    var image = document.getElementById(currentImageArgument);
    image.src = src;
}

function openStoriesPage(currentStory) {
    const storyElement = document.querySelector(`.story[data-story-id="${currentStory}"]`);
    storyElement.classList.add('viewed');
    storyElement.classList.remove('unviewed');

    localStorage.setItem(currentStory, 'true');

    const urlBase = 'https://iktmiet.github.io/beta/stories';

    const url = new URL(urlBase);
    const params = new URLSearchParams({ story: currentStory });
    url.search = params.toString();

    window.location.href = url.toString();
}

function storiesLoad(currentStory, storiesPage) {
    const storyArray = currentStoriesAvailable[currentStory];
    if (storyArray) {
        changeCurrentImage("img_current1", storyArray.IMAGE_1)
        changeCurrentImage("img_current2", storyArray.IMAGE_2)
        changeCurrentImage("img_current3", storyArray.IMAGE_3)
        changeCurrentImage("img_current4", storyArray.IMAGE_4)
        changeCurrentImage("img_current5", storyArray.IMAGE_5)
    
        storiesPage.document.getElementById('slide1').innerHTML = storyArray.TEXT_1;
        storiesPage.document.getElementById('slide2').innerHTML = storyArray.TEXT_2;
        storiesPage.document.getElementById('slide3').innerHTML = storyArray.TEXT_3;
        storiesPage.document.getElementById('slide4').innerHTML = storyArray.TEXT_4;
        storiesPage.document.getElementById('slide5').innerHTML = storyArray.TEXT_5;
    }
}

function checkViews(storyName) {
    document.addEventListener("DOMContentLoaded", function() {
        var isViewed = localStorage.getItem(storyName);

        if (isViewed) {
            const storyElement = document.querySelector(`.story[data-story-id="${storyName}"]`);

            storyElement.classList.add('viewed');
            storyElement.classList.remove('unviewed');
        }
    });
}