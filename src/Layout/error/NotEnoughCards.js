import React from "react";
import Proptypes from "prop-types"
import Buttons from "../comp/Buttons"

function NotEnoughCards({length, id}) {
    return (
        <div id="card-error">
            <h3>Not Enough Cards</h3>
            <p>You need atleast 3 cards to study. There are {length} cards in this deck.</p>

            <Buttons names={["add-card"]} deckId={id} />
        </div>
    )
}

NotEnoughCards.propTypes = {
    length: Proptypes.number.isRequired,
    id: Proptypes.number.isRequired,
}

export default NotEnoughCards