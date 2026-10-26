export default async function handler(req, res) {

  try {

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxxN8_fkMqjWXxqd8Npl_lYytBy8MGzEJvOkzJlgZ49uYirE_jEfckBb_UFcZbfpUhygg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body || {})
      }
    );

    const text = await response.text();

    try {

      const json = JSON.parse(text);

      return res.status(200).json(json);

    } catch {

      return res.status(200).json({
        success: true,
        raw: text
      });

    }

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }

}
