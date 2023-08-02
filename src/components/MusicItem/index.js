import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const MusicItem = props => {
  const {MusicDetails, onClickDeleteTrack} = props
  const {id, genre, imageUrl, name, duration} = MusicDetails

  const onDeleteTrack = () => {
    // console.log(id)
    onClickDeleteTrack(id)
  }

  return (
    <>
      <li className="track-container">
        <div className="left-container">
          <img className="albumImg" src={imageUrl} alt="track" />
          <div className="nameGenre-Container">
            <p className="track-name">{name}</p>
            <p className="track-genre">{genre}</p>
          </div>
        </div>
        <div className="right-container">
          <p className="time">{duration}</p>
          <button
            className="delete-btn"
            data-testid="delete"
            type="button"
            onClick={onDeleteTrack}
          >
            <AiOutlineDelete size="25" />
          </button>
        </div>
      </li>
    </>
  )
}
export default MusicItem
