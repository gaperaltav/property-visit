import { doc, setDoc } from 'firebase/firestore/lite'
import getDatabase from '../db'

/**
 *  Send document's data to Firestore
 * @param {String} document name of the document
 * @param {Object} data data object
 */
export async function saveDocument(document, data, id = 'id') {
  const db = getDatabase()
  const segment = data[id]
  await setDoc(doc(db, 'properties', segment), data)
}

export default {
  saveDocument,
}
