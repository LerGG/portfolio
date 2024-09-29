/**
 * Converts form event to JSON data.
 *
 * @param event Form Event that holds form data
 * @returns TypeOf generic type form data
 */
export const urlParamsToJson = <T>(event: React.SyntheticEvent) => {
  const formData = new FormData(
    event.currentTarget as HTMLFormElement
  ) as Iterable<[T, FormDataEntryValue]>;
  const formDataJson: T = Object.fromEntries(formData);
  return formDataJson;
};
