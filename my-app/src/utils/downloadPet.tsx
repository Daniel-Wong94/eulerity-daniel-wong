import { Pet } from "../types/PetTypes";

export const downloadPet = async (pet: Pet) => {
  /**
   * @summary - This function will convert the pet url into a blob type, then create an anchor tag pointing to the blob
   * @param { Pet } pet - Pet object
   * @returns {void}
   */
  try {
    const response = await fetch(pet.url);
    const blob = await response.blob();

    // create a blob URL
    const blobUrl = URL.createObjectURL(blob);

    // create an anchor element with the blob URL
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = pet.title;

    // append the link to the document and trigger a click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // clean up
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Error downloading image:", error);
  }
};
