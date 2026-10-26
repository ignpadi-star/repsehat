export default async function handler(req, res) {

  try {

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxxN8_fkMqjWXxqd8Npl_lYytBy8MGzEJvOkzJlgZ49uYirE_jEfckBb_UFcZbfpUhygg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(req.body)
      }
    );

    const result = await response.json();

    res.status(200).json(result);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
}
