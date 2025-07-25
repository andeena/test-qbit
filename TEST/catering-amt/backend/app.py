from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/api/pesan', methods=['POST'])
def terima_pesanan():
    data = request.get_json()

    if not data or not 'nama' in data or not 'pesan' in data:
        return jsonify({"status": "gagal", "message": "Data tidak lengkap"}), 400

    print("Pesanan Baru Masuk!")
    print(f"Nama: {data.get('nama')}")
    # print(f"Email: {data.get('email')}")
    print(f"Telepon: {data.get('telepon')}")
    print(f"Pesan: {data.get('pesan')}")

    return jsonify({
        "status": "sukses",
        "message": f"Terima kasih, {data.get('nama')}! Pesanan Anda sudah kami terima."
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)