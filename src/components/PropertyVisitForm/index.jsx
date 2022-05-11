import { setDoc, doc } from 'firebase/firestore/lite'
import React, { useState, useRef } from 'react'
import {
  Box, Button, Container,
  Modal,
} from '@mui/material'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import SaveIcon from '@mui/icons-material/Save'
import CloseIcon from '@mui/icons-material/Close'
import SignaturePad from 'react-signature-canvas'
import getDatabase from '../../db'
import ActionButtonsFooter from '../ActionButtonsFooter'
import PropertyAttributes from '../PropertyAttibutes'
import SearchBar from '../SearchBar'
import './styles.css'
import PropertyVisitFields from './PropertyVisitFields'

const boxModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: ' 500px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

const initialFormData = {
  code: '',
  owner: '',
  phoneNumber: '',
  email: '',
  address: '',
  number: '',
  city: '',
  adviser: '',
  colleague: '',
  signature: '',
  attributes: {
    rent: false,
    furnished: false,
    whiteLine: false,
    sale: false,
    management: false,
  },
  elements: {
    sign: false,
    keys: false,
    occupy: false,
    vigilant: false,
  },
}

function PropertyVisitForm() {
  const [formData, setFormData] = useState(() => initialFormData)
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)

  const signatureRef = useRef({})

  const handleOnSave = async () => {
    setLoading(true)
    const db = getDatabase()
    await setDoc(doc(db, 'properties', formData.code), formData)
    setFormData({ ...initialFormData })
    setLoading(false)
  }

  const setUpdateFormData = (event) => {
    const { target: { value, name } } = event
    if (!name) {
      return
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const onChangeAttributes = (event) => {
    const attributeName = event.target.name
    if (!attributeName) return

    setFormData((prevData) => ({
      ...prevData,
      attributes: {
        ...prevData.attributes,
        [attributeName]: !prevData.attributes[attributeName],
      },
    }))
  }

  const onChangeElements = (event) => {
    const element = event.target.name
    if (!element) return

    setFormData((prevData) => ({
      ...prevData,
      elements: {
        ...prevData.elements,
        [element]: !prevData.elements[element],
      },
    }))
  }

  const onClickSignButton = () => {
    setModal((state) => !state)
  }

  const onClearSignature = () => {
    signatureRef.current.clear()
  }

  const onClickSaveSignature = () => {
    const base64String = signatureRef.current.getTrimmedCanvas().toDataURL('image/png')
    if (base64String) {
      setFormData((prevData) => ({
        ...prevData,
        signature: base64String,
      }))
      setModal(false)
    }
  }

  return (
    <Container className="App">
      <SearchBar
        value={formData.code}
        name="code"
        onChangeValue={setUpdateFormData}
      />

      <PropertyAttributes
        attributes={formData.attributes}
        onChange={onChangeAttributes}
      />

      <PropertyVisitFields
        data={formData}
        elements={formData.elements}
        setUpdateFormData={setUpdateFormData}
        setChangeElements={onChangeElements}
      />

      <Button
        variant="contained"
        size="large"
        style={{
          width: '70%',
          margin: '15px auto',
        }}
        endIcon={<DriveFileRenameOutlineIcon />}
        onClick={onClickSignButton}
      >
        Agregar Firma
      </Button>

      <ActionButtonsFooter
        isLoading={loading}
        onSave={handleOnSave}
      />

      <Modal
        open={modal}
      >
        <Box sx={boxModalStyle}>
          <SignaturePad
            ref={signatureRef}
            canvasProps={{ className: 'signatureCanvas' }}
          />
          <Button
            variant="contained"
            size="small"
            endIcon={<CloseIcon />}
            onClick={onClickSignButton}
          >
            Cerrar
          </Button>
          <Button
            variant="contained"
            size="small"
            endIcon={<CleaningServicesIcon />}
            onClick={onClearSignature}
          >
            Limpiar
          </Button>
          <Button
            variant="contained"
            size="small"
            endIcon={<SaveIcon />}
            onClick={onClickSaveSignature}
          >
            Guardar
          </Button>
        </Box>
      </Modal>
    </Container>
  )
}

export default PropertyVisitForm
