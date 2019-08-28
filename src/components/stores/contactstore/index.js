import { observable, action, computed, decorate } from "mobx";

class ContactStore {
  contacts = [];

  addContact = contact => {
    console.log("A new contact is added");
    console.log(contact);
    this.contacts.push(contact);
  };

  get contactsCount() {
    return this.contacts.length;
  }
}

decorate(ContactStore, {
  contacts: observable,
  addContact: action,
  contactsCount: computed
});

export default new ContactStore();