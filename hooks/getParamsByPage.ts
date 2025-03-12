import { AppData } from "@/constants/Data"

export const getParamsByPage = (pageAfterChange: number) => {
    const lastSection = AppData.sections[AppData.sections.length - 1];
    const flattenedPages = lastSection.data[lastSection.data.length - 1].pages.flat();
    const lastPageSOP = flattenedPages[flattenedPages.length - 1];
    const isSOP = pageAfterChange <= lastPageSOP;
    
    let title = '';
    let found = false;


    if (isSOP) {
        AppData.sections.some((section) => {
            section.data.some((sopData) => {
                sopData.pages.some((pages, index) => {
                    if (pages.length > 1) {
                        found = pageAfterChange >= pages[0] && pageAfterChange <= pages[1];
                    }  else {
                        found = pageAfterChange === pages[0];
                    }

                    if (found) {
                        title = index === 0 ? `${sopData.keyId} ${sopData.title}` : `${sopData.pediatricKeyId} ${sopData.title}`;
                    }

                    return found;
                });

                return found;
            });

            return found;
        });
    } else {

    }

    console.log('found', found, 'tite', title);

    return [found, title];
}

