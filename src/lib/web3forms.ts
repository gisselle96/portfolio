/** Web3Forms access keys are public (meant for browser forms). */
export function getWeb3FormsAccessKey() {
  return process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || "";
}
