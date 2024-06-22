import { StorageProperties, createStorage, readValue } from "./createStorage";

export function useLocalStorage<T = string>(props: StorageProperties<T>) {
	return createStorage<T>("localStorage", "use-local-storage")(props);
}

export const readLocalStorageValue = readValue("localStorage");
