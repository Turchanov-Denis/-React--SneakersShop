

export default function UserBar({ counter, onTrashClick }) {
  // props: counter - trash bin count
  // onTrashClick: is a callback - toggle overlay functional : hide or show overlay
  return (
    <div className="user-bar">
      <div className="user-bar__body">
        <div className="user-bar__column"><div className="user-bar__trash trash">
          <div className="trash">
            <button className="trash__icon" onClick={onTrashClick}> <img src="/img/user-bar-icon/trash.svg" alt="shopCart"></img><div className="trash__count">{counter}p</div></button>

          </div>
        </div></div>
        <div className="user-bar__column"><button className="user-bar__favorite-item"><img src="/img/user-bar-icon/favorite.svg" alt="favorites"></img></button></div>
        <div className="user-bar__column"><button className="user-bar__profile"><img src="/img/user-bar-icon/user-profile.svg" alt="profile"></img></button></div>
      </div>
    </div>
  )
}