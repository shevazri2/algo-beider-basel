import { AlgoType, SectionType } from "@/constants/Data";

export function serializeData(sections: Array<SectionType>) {
  const serializedData = {} as any;

  sections.forEach((section: SectionType) => {
    section.data.forEach((item: AlgoType) => {
      if (item.keyId) {
        serializedData[item.keyId] = item;
      }

      if (item.pediatricKeyId) {
        serializedData[item.pediatricKeyId] = item;
      }
    })
  });

  return serializedData;
}