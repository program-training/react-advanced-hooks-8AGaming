// With God's Help

import { useState } from "react";

export const useStorage = () => {
  const [storage, setStorage] = useState<Storage>(localStorage);
  const [key, setKey] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [item, setItem] = useState<Record<string, unknown>>({});
  const [data, setData] = useState<Record<string, unknown>>({});
  const [dataLength, setDataLength] = useState(0);
  const saveItem = () => {
    storage.setItem(key, value);
  };
  const deleteItem = () => {
    storage.removeItem(key);
  };
  const getItem = () => {
    const StorageItem = storage.getItem(key);
    setItem({ [key]: StorageItem });
  };

  const getAllData = () => {
    const lsData: Record<string, unknown> = {};
    for (let i = 0; i < storage.length; i++) {
      const lsKey = storage.key(i);
      if (lsKey) {
        const lsValue = storage.getItem(lsKey);
        if (lsValue) {
          lsData[lsKey] = lsValue;
        }
      }
    }
    storage;
    setData(lsData);
  };
  const getLsLength = () => {
    setDataLength(storage.length);
  };
  return {
    setKey,
    setValue,
    saveItem,
    deleteItem,
    getItem,
    item,
    getAllData,
    data,
    dataLength,
    getLsLength,
    setStorage,
  };
};
