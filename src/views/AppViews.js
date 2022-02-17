import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h1>Simple Staker</h1>
          {content}
        </header>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    const { parent } = this.props;
    console.info('props!', this.props);
    console.info('parent!', parent);
    return (
      <main>
        Please click the button to connect your account.
        <br />
        <br />
        <button className='MyAlgoWalletButton' onClick={
          () => parent.openWalletPopUp()
        }>MyAlgoConnect</button>
      </main>
    )
  }
}

exports.RoleSelect = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        Please select a role:
        <br />
        <p>
          <button
            onClick={() => parent.selectDeployer()}
          >Deployer</button>
          <br /> Incentivise others to stake by deploying and funding a contract with rewards.
        </p>
        <p>
          <button
            onClick={() => parent.selectStaker()}
          >Staker</button>
          <br /> Stake in a deployed contract to receive its rewards.
        </p>
      </div>
    );
  }
}

export default exports;
