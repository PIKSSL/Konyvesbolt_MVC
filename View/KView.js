import Book from "./Book.js";

class KView{

    constructor(array, parent) {

        parent.append(
            `
            <table>
            <tr>
            <td>ID</td>
            <td>cim</td>
            <td>szerző</td>
            <td>ár</td>
            </tr>
            </table>
            `);
            this.table = parent.children("table:last-child");

            array.forEach(book => {
                new Book(book, this.table);
            });
    }

}

export default KView;