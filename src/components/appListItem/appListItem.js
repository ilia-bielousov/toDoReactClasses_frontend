import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, ListGroupItem } from "react-bootstrap";
import { doChange } from '../../store/clientReducer';
import { Request } from '../../utilities/utilities';

import AppModal from '../appModal/appModal';

import markedNote from './../../assets/images/markedNote.png';
import nomarkedNote from './../../assets/images/nomarkedNote.png';

import './appListItem.scss';

const AppListItem = (props) => {
  const { checked, text } = props;
  const dispatch = useDispatch();
  const notes = useSelector(state => state.client.notes);
  const [textNote, setTextNote] = useState(text);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAdding, setIsAdding] = useState(true);
  const [over, setOver] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAdding(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const submitDelete = (checked, id) => {
    if (!checked) {
      setConfirmDelete(true);
    } else {
      deleteNote(id);
    }
  };

  const clickForDeleteNote = (deleted, id) => {
    if (deleted) {
      deleteNote(id);
      setConfirmDelete(false);
    } else {
      setConfirmDelete(false);
    }
  }

  const changeStyleTrash = () => {
    setOver(!over);
  }

  const onChangeTextNote = (e, checked) => {
    if (checked) {
      alert('This taks is completed!, please delete it');
    } else {
      setTextNote(e.target.value);
      setIsEdited(true);
    }
  }

  const onChangeClick = (id) => {
    const note = {
      _id: id,
      text: textNote
    };

    Request('http://localhost:5000/update-note-text', 'PATCH', note)
    dispatch(doChange(true));
    setIsEdited(false);
  }

  const checkItem = (id) => {
    notes.map(item => {
      if (item._id === id) {
        updateCheckItem(id, !item.checked);
        return { ...item, checked: !item.checked }
      }
      return item;
    });
  }

  const updateCheckItem = async (id, checked) => {
    const note = {
      _id: id,
      checked
    };

    Request('http://localhost:5000/update-note-check', 'PATCH', note);
    dispatch(doChange(true));
  }

  const deleteNote = async (id) => {
    setIsDeleting(true);

    setTimeout(async () => {
      const note = {
        _id: id
      }

      await Request('http://localhost:5000/delete-note', 'DELETE', note);
      dispatch(doChange(true));
    }, 300);
  }

  return (
    <>
      <ListGroupItem as="li" className={`list__item d-flex align-items-center   ${isDeleting ? 'deleting' : ''} ${isAdding ? 'adding' : ''}`}>
        <Col sm={1} xs={2} className="d-grid">
          <span className="list__done" onClick={() => checkItem(props.id)}>
            <img src={checked ? markedNote : nomarkedNote} alt="note" />
          </span>
        </Col>
        <Col sm={10} xs={8} className="list__text-inner">
          <input
            style={props.checked ? { textDecoration: 'line-through' } : null}
            onChange={(e) => onChangeTextNote(e, props.checked)}
            className={`list__text ${isEdited ? 'edited' : ''}`}
            value={textNote}
          />
          <button
            className='list__button-update'
            onClick={() => onChangeClick(props.id)}
          >
            update
          </button>
        </Col>
        <Col sm={1} xs={2} className="d-grid">
          <span
            className="list__delete"
            onClick={() => submitDelete(props.checked, props.id)}
            onMouseEnter={changeStyleTrash}
            onMouseLeave={changeStyleTrash}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity={over ? 1 : 0.3} clipPath="url(#clip0_116_185)">
                <path
                  d="M7.99999 25.3333C7.99999 26.8 9.19999 28 10.6667 28H21.3333C22.8 28 24 26.8 24 25.3333V9.33333H7.99999V25.3333ZM10.6667 12H21.3333V25.3333H10.6667V12ZM20.6667 5.33333L19.3333 4H12.6667L11.3333 5.33333H6.66666V8H25.3333V5.33333H20.6667Z"
                  fill="#B30B04" />
              </g>
              <defs>
                <clipPath id="clip0_116_185">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </Col>
      </ListGroupItem>
      {confirmDelete ?
        <AppModal>
          <div>
            <h2>Are you sure to delete this note?</h2>
            <div className="modal__buttons">
              <button onClick={() => clickForDeleteNote(true, props.id)} className='modal__btn'>yes</button>
              <button onClick={() => clickForDeleteNote(false, props.id)} className='modal__btn'>no</button>
            </div>
          </div>
        </AppModal>
        :
        null
      }
    </>
  )
}

export default AppListItem;