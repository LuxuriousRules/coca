export async function getProducts() {
  try {
    const res = await fetch("http://localhost:9000/store/products", {
      headers: {
        "x-publishable-api-key": "pk_40a399d987bf476092cdd40eac3b3110edf2f00b8efe18439a2109d14df60d91" // вставь свой ключ
      }
    });

    if (!res.ok) {
      throw new Error(`Ошибка: ${res.status}`);
    }

    const data = await res.json();
    return data.products;
  } catch (err) {
    console.error("Ошибка запроса:", err);
    return [];
  }
}


