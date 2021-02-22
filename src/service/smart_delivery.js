class SmartDelivery {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: "GET",
            redirect: "follow",
        };
    }

    async company() {
        const response = await fetch(
            `http://info.sweettracker.co.kr/api/v1/companylist?t_key=${this.key}`,
            this.getRequestOptions
        );
        const result = await response.json();
        return result;
    }

    async tracking() {
        const response = await fetch(
            `http://info.sweettracker.co.kr/api/v1/trackingInfo?t_code=06&t_invoice=93549899155&t_key=${this.key}`,
            this.getRequestOptions
        );
        const result = await response.json();
        return result;
    }
}

export default SmartDelivery;
