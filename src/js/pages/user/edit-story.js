import Crud from '../../network/crud';

const Edit = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const urlParams = new URLSearchParams(window.location.search);
    const storyId = urlParams.get('id');

    if (!storyId) return;

    try {
      const story = await Crud.getStoryById(storyId);
      this._putFormData(story.data.story);
    } catch (error) {
      console.error('Failed to get story by ID:', error);
    }
  },

  _putFormData(story) {
    const descriptionInput = document.querySelector('#descriptionInput');
    const imageInput = document.querySelector('#previewImage');
    const inputGuest = document.querySelector('#inputGuest');

    descriptionInput.value = story.description;
    imageInput.src = story.photoUrl;
    if (story.name == 'Guest') {
      inputGuest.checked = true;
    } else {
      inputGuest.checked = false;
    }
  },
};

export default Edit;
