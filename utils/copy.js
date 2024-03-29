const email = 'hieudm.7998@gmail.com';

export async function copyTextToClipboard() {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(email);
  } else {
    return document.execCommand('copy', true, email);
  }
}