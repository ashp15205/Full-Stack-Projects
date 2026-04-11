import { useState, useEffect } from 'react';
import './App.css';

const API = '/api/students';     // Proxy to http://localhost:5000

const EMPTY_FORM = { name:'', email:'', rollNo:'', branch:'Computer Science', year:1, phone:'' };

function App() {
  const [students, setStudents]   = useState([]);
  const [form, setForm]           = useState(EMPTY_FORM);
  const [editId, setEditId]       = useState(null);
  const [loading, setLoading]     = useState(false);
  const [message, setMessage]     = useState('');
  const [search, setSearch]       = useState('');

  // ── Fetch all students ──
  useEffect(() => { fetchStudents(); }, []);

  async function fetchStudents() {
    setLoading(true);
    try {
      const res  = await fetch(API);
      const data = await res.json();
      setStudents(data);
    } catch {
      showMsg('❌ Could not connect to server');
    } finally {
      setLoading(false);
    }
  }

  // ── Create or Update ──
  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.rollNo) {
      showMsg('❌ Name, Email and Roll No are required'); return;
    }

    const url    = editId ? `${API}/${editId}` : API;
    const method = editId ? 'PUT' : 'POST';

    const res  = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (!res.ok) { showMsg('❌ ' + data.message); return; }

    if (editId) {
      setStudents(prev => prev.map(s => s._id === editId ? data : s));
      showMsg('✅ Student updated successfully!');
    } else {
      setStudents(prev => [data, ...prev]);
      showMsg('✅ Student registered successfully!');
    }
    resetForm();
  }

  // ── Edit: prefill form ──
  function handleEdit(student) {
    setEditId(student._id);
    setForm({
      name:   student.name,
      email:  student.email,
      rollNo: student.rollNo,
      branch: student.branch,
      year:   student.year,
      phone:  student.phone || '',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── Delete ──
  async function handleDelete(id) {
    if (!window.confirm('Delete this student?')) return;
    const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setStudents(prev => prev.filter(s => s._id !== id));
      showMsg('🗑 Student deleted');
    }
  }

  function resetForm() { setForm(EMPTY_FORM); setEditId(null); }
  function showMsg(msg) { setMessage(msg); setTimeout(() => setMessage(''), 3000); }

  const change = e => setForm({ ...form, [e.target.name]: e.target.value });

  // ── Filter ──
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.rollNo.toLowerCase().includes(search.toLowerCase()) ||
    s.branch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>🎓 Student Registration</h1>
        <p>MERN Stack – Full CRUD Application</p>
      </header>

      <main className="container">
        {/* ── FORM SECTION ── */}
        <section className="form-card">
          <h2>{editId ? '✏️ Edit Student' : '➕ Register Student'}</h2>
          {message && <div className="message">{message}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label>Full Name *</label>
                <input name="name" value={form.name} onChange={change} placeholder="John Doe" required/>
              </div>
              <div className="field">
                <label>Email *</label>
                <input name="email" type="email" value={form.email} onChange={change} placeholder="john@example.com" required/>
              </div>
              <div className="field">
                <label>Roll Number *</label>
                <input name="rollNo" value={form.rollNo} onChange={change} placeholder="CS2026001" required/>
              </div>
              <div className="field">
                <label>Branch</label>
                <select name="branch" value={form.branch} onChange={change}>
                  <option>Computer Science</option>
                  <option>Information Technology</option>
                  <option>Electronics</option>
                  <option>Mechanical</option>
                  <option>Civil</option>
                </select>
              </div>
              <div className="field">
                <label>Year</label>
                <select name="year" value={form.year} onChange={change}>
                  <option value={1}>1st Year</option>
                  <option value={2}>2nd Year</option>
                  <option value={3}>3rd Year</option>
                  <option value={4}>4th Year</option>
                </select>
              </div>
              <div className="field">
                <label>Phone</label>
                <input name="phone" value={form.phone} onChange={change} placeholder="+91 9876543210"/>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-submit">
                {editId ? '💾 Update Student' : '✅ Register'}
              </button>
              {editId && (
                <button type="button" className="btn-cancel" onClick={resetForm}>✕ Cancel Edit</button>
              )}
            </div>
          </form>
        </section>

        {/* ── STUDENTS TABLE ── */}
        <section className="table-card">
          <div className="table-header">
            <h2>📋 Students ({filtered.length})</h2>
            <input
              type="text" placeholder="🔍 Search name, roll no, branch..."
              value={search} onChange={e => setSearch(e.target.value)}
              className="search-input"
            />
          </div>

          {loading ? (
            <p className="loading">Loading students…</p>
          ) : filtered.length === 0 ? (
            <p className="empty">No students found</p>
          ) : (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roll No</th>
                    <th>Branch</th>
                    <th>Year</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((s, i) => (
                    <tr key={s._id}>
                      <td>{i + 1}</td>
                      <td><strong>{s.name}</strong></td>
                      <td>{s.email}</td>
                      <td><span className="roll-badge">{s.rollNo}</span></td>
                      <td>{s.branch}</td>
                      <td>{s.year}</td>
                      <td>{s.phone || '—'}</td>
                      <td>
                        <button className="btn-edit"   onClick={() => handleEdit(s)}>✏ Edit</button>
                        <button className="btn-delete" onClick={() => handleDelete(s._id)}>🗑 Del</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
