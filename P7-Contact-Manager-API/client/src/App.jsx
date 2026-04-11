import { useState, useEffect } from 'react';
import './App.css';

const API = '/api/contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // ── Fetch all contacts ──
  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      setContacts(data);
    } catch {
      showMsg('❌ Could not connect to server', 'error');
    } finally {
      setLoading(false);
    }
  }

  // ── Add Contact ──
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) {
      showMsg('❌ Name and Email are required', 'error');
      return;
    }

    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        showMsg('❌ ' + data.message, 'error');
        return;
      }

      setContacts([data, ...contacts]);
      showMsg('✅ Contact added successfully!', 'success');
      setForm({ name: '', email: '', phone: '' });
    } catch {
      showMsg('❌ Could not connect to server', 'error');
    }
  }

  // ── Delete Contact ──
  async function handleDelete(id) {
    if (!window.confirm('Delete this contact?')) return;
    try {
      const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setContacts(contacts.filter(c => c._id !== id));
        showMsg('🗑 Contact deleted', 'success');
      }
    } catch {
      showMsg('❌ Failed to delete', 'error');
    }
  }

  function showMsg(text, type) {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  }

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="app">
      <header>
        <h1>📋 Contact Manager API</h1>
        <p>MERN Stack – Add & View Operations</p>
      </header>

      <main className="container">
        {/* ── FORM SECTION ── */}
        <section className="form-card">
          <h2>➕ Add New Contact</h2>
          {message.text && <div className={`message ${message.type}`}>{message.text}</div>}

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>Full Name *</label>
              <input name="name" value={form.name} onChange={change} placeholder="Jane Smith" required/>
            </div>
            <div className="field">
              <label>Email *</label>
              <input name="email" type="email" value={form.email} onChange={change} placeholder="jane@example.com" required/>
            </div>
            <div className="field">
              <label>Phone</label>
              <input name="phone" value={form.phone} onChange={change} placeholder="+91 9876543210"/>
            </div>

            <button type="submit" className="btn-submit">
              ➕ Add Contact
            </button>
          </form>
        </section>

        {/* ── LIST SECTION ── */}
        <section className="list-card">
          <div className="list-header">
            <h2>📋 Contacts Directory</h2>
            <span className="count-badge">{contacts.length} Contacts</span>
          </div>

          {loading ? (
            <p className="loading">Loading...</p>
          ) : contacts.length === 0 ? (
            <div className="empty">No contacts found</div>
          ) : (
            <div className="contacts-list">
              {contacts.map((c) => (
                <div key={c._id} className="contact-item">
                  <div className="contact-info">
                    <div className="contact-name">👤 {c.name}</div>
                    <div className="contact-email">📧 {c.email}</div>
                    {c.phone && <div className="contact-phone">📞 {c.phone}</div>}
                  </div>
                  <button className="btn-delete" onClick={() => handleDelete(c._id)}>🗑 Del</button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
