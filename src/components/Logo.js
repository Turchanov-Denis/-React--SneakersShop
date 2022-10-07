

export default function Logo({ title, subtitle }) {
  return (
    <div className="logo">
      <div className='logo__body'>
        <div className="logo__column">
          <div className="logo__icon"> <img src="/img/logo.png"></img></div>
        </div>
        <div className="logo__column">
          <div className="logo__title">{title}</div>
          <div className="logo__subtitle">{subtitle}</div>
        </div>
      </div>
    </div>
  )
}