import Base from '/componets/Base.js'
import CSS from './reserve.css.js'

export default class Reserve extends Base {

    css = CSS

    content = `
    <div class="backdrop">
        <div class="container">
            <div class="row">
                    <span class="title">Reserve the property</span>
                </div>
            <div class="row">
                <span class="propertyId">#y7834trry9q2eygi</span>
            </div>
            <div class="row">
                <span class="title">Boarding house in colombo</span>
            </div>
            <div class="row">
                <span class="keyMoney">Rs.21, 000</span>
            </div>
            <div class="row">
                <span class="pay-keymoney">Pay Key Money</span>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                    </label>
                <span class="pay-advance">Pay an Advance</span>
            </div>
            <hr/>
            <div class="row">
                <div class="sub-row">
                    <span class="sub-total-title">Sub Total </span>
                    <span class="sub-total">Rs.21, 000</span>
                </div>
                <div class="sub-row">
                    <span class="service-fee-title">Service Fee </span>
                    <span class="service-fee">Rs.100</span>
                </div>
                <div class="sub-row">
                    <span class="total-title">Total </span>
                    <span class="total">Rs.21, 100</span>
                </div>
            </div>
            <div class="row">
                <button class="reserve">Reserve Now!</button>
            </div>
        </div>
    </div>
`
    constructor() {
        super()
        this.mount()
        
    }//End of constructor

    connectedCallback() {

    }//End of connectedCallback

}//End of Class

window.customElements.define('reserve-comp', Reserve)