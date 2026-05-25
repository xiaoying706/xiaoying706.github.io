document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector("#site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = contactForm.elements["name"].value.trim();
      const contact = contactForm.elements["contact"].value.trim();
      const message = contactForm.elements["message"].value.trim();
      const lang = contactForm.dataset.lang || "zh";
      const email = contactForm.dataset.email || "yingxiao706@gmail.com";

      if (!name || !contact || !message) {
        alert(lang === "en" ? "Please complete all required fields." : "请填写完整的联系信息和项目需求。");
        return;
      }

      const subject = lang === "en" ? "Pipeline equipment inquiry" : "管道施工设备咨询";
      const body = [
        lang === "en" ? "Name: " : "姓名：",
        name,
        "\n",
        lang === "en" ? "Contact: " : "电话 / 邮箱：",
        contact,
        "\n\n",
        lang === "en" ? "Project requirements:\n" : "项目需求：\n",
        message
      ].join("");

      window.location.href = "mailto:" + encodeURIComponent(email) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      contactForm.reset();
    });
  }
});
