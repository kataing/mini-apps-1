import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      f1: false,
      f2: false,
      f3: false,
      confirmation: false,
      id: null,
      name: null,
      email: null,
      password: null,
      address1: null,
      address2: null,
      city: null,
      state: null,
      zip: null,
      phone: null,
      creditcard: null,
      expirydate: null,
      cvv: null,
      billingzip: null,
      purchase: null
    }
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.handleNext1Click = this.handleNext1Click.bind(this);
    this.handleNext2Click = this.handleNext2Click.bind(this);
    this.handleNext3Click = this.handleNext3Click.bind(this);
    this.handlePurchaseClick = this.handlePurchaseClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    // this.post = this.post.bind(this);
    this.update = this.update.bind(this);
  }

  post() {
    const {
      name, email, password, address1, address2, city, state, zipcode,
      phone, creditcard, expirydate, cvv, billingzip, purchase
    } = this.setState;
    axios
      .post('route/api', {
        name, email, password, address1, address2, city, state, zipcode,
        phone, creditcard, expirydate, cvv, billingzip, purchase
      })
      .then(({ data }) => {
        console.log('your checkout has been initiated.');
        this.setState({ id: data });
      })
      .catch(() => console.log('your checkout could not be initiated.'))
  }

  update() {
    const {
      name, email, password, address1, address2, city, state, zipcode,
      phone, creditcard, expirydate, cvv, billingzip, purchase
    } = this.state;
    axios
      .put(`route/api/${this.state.id}`, {
        name, email, password, address1, address2, city, state, zipcode,
        phone, creditcard, expirydate, cvv, billingzip, purchase
      })
      .then(() => console.log('your checkout progress has been saved.'))
      .catch(() => console.log('your checkout progress has not been saved.'))
  }

  handleCheckoutClick() {
    this.post();
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
    this.update();
  }

  handleNext2Click() {
    this.setState({
      f2: !this.state.f2,
      f3: !this.state.f3
    })
    this.update();
  }

  handleNext3Click() {
    this.setState({
      f3: !this.state.f3,
      confirmation: !this.state.confirmation
    })
    this.update();
  }

  handlePurchaseClick() {
    this.setState({
      confirmation: !this.state.confirmation,
      home: !this.state.home
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
        <section>
          <img src='cart.png' alt='cart' />
          <button onClick={this.handleCheckoutClick}>Begin Checkout</button>
        </section>
      )
    }
  }

  f1() {
    if (this.state.f1) {
      return (
        <section>
          <form id='f1' >
            <h3>General Information</h3>
            <div>Name: </div>
            <input id='name' type='text' onChange={this.handleOnChange}></input>
            <div>Email: </div>
            <input id='email' type='text' onChange={this.handleOnChange}></input>
            <div>Password: </div>
            <input id='password' type='password' onChange={this.handleOnChange}></input>
          </form>
          <button id='nextbutton1' onClick={this.handleNext1Click}>Next</button>
        </section>
      )
    }
  }

  f2() {
    if (this.state.f2) {
      return (
        <section>
          <form id='f2'>
            <h3>Shipping Information</h3>
            <div>Address Line 1: </div>
            <input id='address1' type='text' onChange={this.handleOnChange}></input>
            <div>Address Line 2: </div>
            <input id='address2' type='text' onChange={this.handleOnChange}></input>
            <div>City</div>
            <input id='city' type='text' onChange={this.handleOnChange}></input>
            <div>State</div>
            <input id='state' type='text' onChange={this.handleOnChange}></input>
            <div>Zipcode</div>
            <input id='zipcode' type='text' onChange={this.handleOnChange}></input>
            <div>Phone#</div>
            <input id='phone' type='text'></input>
          </form>
          <button id='nextbutton2' onClick={this.handleNext2Click}>Next</button>
        </section>
      )
    }
  }

  f3() {
    if (this.state.f3) {
      return (
        <section>
          <form id='f3'>
            <h3>Billing Information</h3>
            <div>Creditcard#: </div>
            <input id='creditcard' type='text' onChange={this.handleOnChange}></input>
            <div>Exp: </div>
            <input id='expirydate' type='text' onChange={this.handleOnChange}></input>
            <div>CVV</div>
            <input id='cvv' type='text' onChange={this.handleOnChange}></input>
            <div>Billing Zipcode</div>
            <input id='billingzip' type='text' onChange={this.handleOnChange}></input>
          </form>
          <button id='nextbutton3' onClick={this.handleNext3Click}>Next</button>
        </section>
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
        <section>
          <form className='confirmation'>
            {/* <h3>This is confirmation</h3> */}
            <h3>General Information</h3>
            <div>
              <span>Name: </span>
              <span>{this.state.name}</span>
            </div>
            <div>
              <span>Email: </span>
              <span>{this.state.email}</span>
            </div>
            <div>
              <span>Password: </span>
              <span>{this.state.password}</span>
            </div>
            <h3>Shipping Information</h3>
            <div>
              <span>Address Line 1: </span>
              <span>{this.state.address1}</span>
            </div>
            <div>
              <span>Address Line 2: </span>
              <span>{this.state.address2}</span>
            </div>
            <div>
              <span>City: </span>
              <span>{this.state.city}</span>
            </div>
            <div>
              <span>State: </span>
              <span>{this.state.state}</span>
            </div>
            <div>
              <span>Zipcode: </span>
              <span>{this.state.zipcode}</span>
            </div>
            <div>
              <span>Phone#: </span>
              <span>{this.state.phone}</span>
            </div>
            <h3>Billing Information</h3>
            <div>
              <span>Creditcard#: </span>
              <span>{this.state.creditcard}</span>
            </div>
            <div>
              <span>Exp: </span>
              <span>{this.state.expirydate}</span>
            </div>
            <div>
              <span>CVV: </span>
              <span>{this.state.cvv}</span>
            </div>
            <div>
              <span>Billing Zipcode: </span>
              <span>{this.state.billingzip}</span>
            </div>
          </form>
          <button id='purchasebutton' onClick={this.handlePurchaseClick}>Purchase</button>
        </section>
      )
    }
  }

  render() {
    return (
      <section>
        {/* <div>This is app</div> */}
        <h1>Welcome to our site!</h1>
        {this.home()}
        {this.f1()}
        {this.f2()}
        {this.f3()}
        {this.confirmation()}
      </section>
    )
  }
}

export default App;