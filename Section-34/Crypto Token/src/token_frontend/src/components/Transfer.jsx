import React from "react";
import { Principal } from "@dfinity/principal";
import { token_backend, canisterId, createActor } from "../../../declarations/token_backend";
import { AuthClient } from "@dfinity/auth-client";

function Transfer() {

  const [recipientId, setId] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [isDisabled, setDisable] = React.useState(false);
  const [feedback, setFeedback] = React.useState("");
  const [isHidden, setHidden] = React.useState(true);




  async function handleClick() {
    setHidden(true)
    setDisable(true);
    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();
    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity: identity,
      },
    });
    const result = await authenticatedCanister.transfered(Principal.fromText(recipientId), Number(amount));
    setFeedback(result);
    setHidden(false)
    setDisable(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(event) => { setId(event.target.value) }}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(event) => { setAmount(event.target.value) }}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
