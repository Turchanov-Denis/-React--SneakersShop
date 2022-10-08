

export default function UserBar({counter,onTrashClick}) {
    return (
        <div className="user-bar">
              <div className="user-bar__body">
                <div className="user-bar__column"><div className="user-bar__trash trash">
                  <div className="trash">
                    <button className="trash__icon" onClick={onTrashClick}> <img src="/img/user-bar-icon/trash.svg" ></img><div className="trash__count">{counter}p</div></button>
                    
                  </div>
                </div></div>
                <div className="user-bar__column"><div className="user-bar__favorite-item"><img src="/img/user-bar-icon/favorite.svg"></img></div></div>
                <div className="user-bar__column"><div className="user-bar__profile"><img src="/img/user-bar-icon/user-profile.svg"></img></div></div>
              </div>
            </div>
    )
}