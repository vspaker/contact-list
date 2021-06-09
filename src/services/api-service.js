export default class ApiService {
  _smallDataUrl = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;
  _fullDataUrl = `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`;

  getResource = async (url) => {
    const res = await fetch(`${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getSmallData = async () => {
    const res = await this.getResource(this._smallDataUrl);
    return this._transformItems(res);
  };

  getFullData = async () => {
    const res = await this.getResource(this._fullDataUrl);
    return this._transformItems(res);
  };
  _transformItems = (items) => {
    let firstKey = 0;
    return items.map((item) => {
      firstKey++;
      item.key = firstKey;
      return item;
    });
  };
}
