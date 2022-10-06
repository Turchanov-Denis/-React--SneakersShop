

export default function UserBar() {
    return (
        <div className="user-bar">
              <div className="user-bar__body">
                <div className="user-bar__column"><div className="user-bar__trash trash">
                  <div className="trash">
                    <a href="" className="trash__icon"> <img src="/img/user-bar-icon/trash.svg"></img></a>
                    <div className="trash__count">0p</div>
                  </div>
                </div></div>
                <div className="user-bar__column"><div className="user-bar__favorite-item"><img src="/img/user-bar-icon/favorite.svg"></img></div></div>
                <div className="user-bar__column"><div className="user-bar__profile"><img src="/img/user-bar-icon/user-profile.svg"></img></div></div>
              </div>
            </div>
    )
}