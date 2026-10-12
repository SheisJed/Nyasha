
import './WhimsyCompanion.css'

function WhimsyCompanion() {
  return (
    <div className="whimsy-scene" aria-hidden="true">
      <img
        className="whimsy-scene-image"
        src={`${import.meta.env.BASE_URL}images/whimy-ct.jfif`}
        alt=""
      />
    </div>
  )
}

export default WhimsyCompanion
