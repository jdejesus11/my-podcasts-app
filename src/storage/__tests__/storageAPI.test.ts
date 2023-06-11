import { listOfPodcasts } from "../../helpers/data";
import { PODCASTS_STORAGE_KEY, saveData } from "../storageAPI";

import localStorageMock from "../../../mocks/localStorageMock"

describe("Storage API" , () => {
    const setItemMocked = jest.fn()

    beforeAll(() => {
        Object.defineProperty(window, "localStorage", { value: localStorageMock });
        window.localStorage.setItem = setItemMocked;
    })

    afterAll(() => {
        window.localStorage.clear();
    })

    describe("Storage API" , () => {
        const fetchDataMocked = jest.fn(() => Promise.resolve(listOfPodcasts));
    
        it("should save a list of podcasts", async () => {
            const storageKey = PODCASTS_STORAGE_KEY;
            const storagedData = await saveData(storageKey, fetchDataMocked);
            expect(fetchDataMocked).toHaveBeenCalledTimes(1) 
            expect(storagedData).toEqual(listOfPodcasts)  
            expect(setItemMocked).toHaveBeenCalled()
        })
    })  
}) 