function login(username, password) {

  // 👑 MASTER ADMIN
  const masterUser = "tyharrison296";
  const masterPass = "tyler123";

  if (username === masterUser && password === masterPass) {
    localStorage.setItem("user", username);
    localStorage.setItem("role", "masteradmin");

    // 🔥 IMPORTANT REDIRECT FIX
    window.location.replace("admin.html");
    return true;
  }

  // 👤 STAFF ACCOUNTS (optional)
  const users = [
    { user: "staff1", pass: "1234", role: "staff" },
    { user: "manager1", pass: "1234", role: "manager" }
  ];

  const match = users.find(
    u => u.user === username && u.pass === password
  );

  if (match) {
    localStorage.setItem("user", match.user);
    localStorage.setItem("role", match.role);

    window.location.replace("admin.html");
    return true;
  }

  return false;
}
