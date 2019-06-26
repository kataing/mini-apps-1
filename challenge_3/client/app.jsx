import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      f1: false,
      f2: false,
      f3: false,
      confirmation: false,
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      creditcard: '',
      expirydate: '',
      cvv: '',
      billingzip: '',
      purchase: ''
    }
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.handleNext1Click = this.handleNext1Click.bind(this);
    this.handleNext2Click = this.handleNext2Click.bind(this);
    this.handleNext3Click = this.handleNext3Click.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleCheckoutClick() {
    this.setState({
      home: !this.state.home,
      f1: !this.state.f1
    })
  }

  handleNext1Click() {
    this.setState({
      f1: !this.state.f1,
      f2: !this.state.f2
    })
  }

  handleNext2Click() {
    this.setState({
      f2: !this.state.f2,
      f3: !this.state.f3
    })
  }

  handleNext3Click() {
    this.setState({
      f3: !this.state.f3,
      confirmation: !this.state.confirmation
    })
  }

  handleOnChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  home() {
    if (this.state.home) {
      return (
        <div>
          <h3>This is home</h3>
          <button onClick={this.handleCheckoutClick}>Begin Checkout</button>
        </div>
      )
    }
  }

  f1() {
    if (this.state.f1) {
      return (
        <form id='f1' >
          <h3>TGeneral Information</h3>
          <div>
            <div>Name: </div>
            <input id='name' type='text' onChange={this.handleOnChange}></input>
          </div>
          <div>
            <div>Email: </div>
            <input id='email' type='text' onChange={this.handleOnChange}></input>
          </div>
          <div>
            <div>Password: </div>
            <input id='password' type='password' onChange={this.handleOnChange}></input>
          </div>
          <button id='nextbutton1' onClick={this.handleNext1Click}>Next</button>
        </form>
      )
    }
  }

  f2() {
    if (this.state.f2) {
      return (
        <form id='f2'>
          <h3>Shipping Information</h3>
          <div>
            <div>Address Line 1: </div>
            <input id='address1' type='text' onChange={this.handleOnChange}></input>
          </div>
          <div>
            <div>Address Line 2: </div>
            <input id='address2' type='text' onChange={this.handleOnChange}></input>
          </div>
          <div>
            <div>City</div>
            <input id='city' type='text' onChange={this.handleOnChange}></input>
          </div>
          <div>
            <div>State</div>
            <input id='state' type='text' onChange={this.handleOnChange}></input>
          </div>
          <div>
            <div>Zipcode</div>
            <input id='zipcode' type='text' onChange={this.handleOnChange}></input>
          </div>
          <div>
            <div>Phone#</div>
            <input id='phone' type='text'></input>
          </div>
          <button id='nextbutton2' onClick={this.handleNext2Click}>Next</button>
        </form>
      )
    }
  }

  f3() {
    if (this.state.f3) {
      return (
        <form id='f3'>
          <h3>Billing Information</h3>
          <div>
            <div>Creditcard#: </div>
            <input id='creditcard' type='text' onChange={this.handleOnChange}></input>
          </div>
          <div>
            <div>Exp: </div>
            <input id='expirydate' type='text' onChange={this.handleOnChange}></input>
          </div>
          <div>
            <div>CVV</div>
            <input id='cvv' type='text' onChange={this.handleOnChange}></input>
          </div>
          <div>
            <div>Billing Zipcode</div>
            <input id='billingzip' type='text' onChange={this.handleOnChange}></input>
          </div>
          <button id='nextbutton3' onClick={this.handleNext3Click}>Next</button>
        </form>
      )
    }
  }

  // next() {
  //   if (this.state.next) {
  //     return(
  //       <button id='nextbutton' onClick={this.handleNext1Click}>Next</button>
  //     )
  //   }
  // }

  confirmation() {
    if (this.state.confirmation) {
      return (
        <div>
          <h3>This is confirmation</h3>
          <h3>General Information</h3>
          <div>
            <div>Name: </div>
            <span>{this.state.name}</span>
          </div>
          <div>
            <div>Email: </div>
            <span>{this.state.email}</span>
          </div>
          <div>
            <div>Password: </div>
            <span>{this.state.password}</span>
          </div>
          <h3>Shipping Information</h3>
          <div>
            <div>Address Line 1: </div>
            <span>{this.state.address1}</span>
          </div>
          <div>
            <div>Address Line 2: </div>
            <span>{this.state.address2}</span>
          </div>
          <div>
            <div>City</div>
            <span>{this.state.city}</span>
          </div>
          <div>
            <div>State</div>
            <span>{this.state.state}</span>
          </div>
          <div>
            <div>Zipcode</div>
            <span>{this.state.zipcode}</span>
          </div>
          <div>
            <div>Phone#</div>
            <span>{this.state.phone}</span>
          </div>
          <h3>Billing Information</h3>
          <div>
            <div>Creditcard#: </div>
            <span>{this.state.creditcard}</span>
          </div>
          <div>
            <div>Exp: </div>
            <span>{this.state.expirydate}</span>
          </div>
          <div>
            <div>CVV</div>
            <span>{this.state.cvv}</span>
          </div>
          <div>
            <div>Billing Zipcode</div>
            <span>{this.state.billingzip}</span>
          </div>
          <button>Purchase</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {/* <div>This is app</div> */}
        <h1>Welcome to our site!</h1>
        {this.home()}
        {this.f1()}
        {this.f2()}
        {this.f3()}
        {this.confirmation()}
      </div>
    )
  }
}

export default App;