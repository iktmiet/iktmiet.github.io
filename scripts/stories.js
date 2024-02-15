function changeCurrentImage(currentImageArgument, src) {
    var image = document.getElementById(currentImageArgument);
    image.src = src;
}

function openStoriesPage(currentStory) {
    const storyElement = document.querySelector(`.story[data-story-id="${currentStory}"]`);
    storyElement.classList.add('viewed');
    storyElement.classList.remove('unviewed');

    localStorage.setItem(currentStory, 'true');

    const storiesPage = window.open('stories.html', '_blank');

    storiesPage.onload = function() {}
  }

function storiesLoad(currentStory, storiesPage) {
    changeCurrentImage("img_current1", currentStory.IMAGE_1)
    changeCurrentImage("img_current2", currentStory.IMAGE_2)
    changeCurrentImage("img_current3", currentStory.IMAGE_3)
    changeCurrentImage("img_current4", currentStory.IMAGE_4)
    changeCurrentImage("img_current5", currentStory.IMAGE_5)

    storiesPage.document.getElementById('slide1').innerHTML = currentStory.TEXT_1;
    storiesPage.document.getElementById('slide2').innerHTML = currentStory.TEXT_2;
    storiesPage.document.getElementById('slide3').innerHTML = currentStory.TEXT_3;
    storiesPage.document.getElementById('slide4').innerHTML = currentStory.TEXT_4;
    storiesPage.document.getElementById('slide5').innerHTML = currentStory.TEXT_5;
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