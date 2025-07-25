fruits = [ 
    {
        "fruitId": 1, 
        "fruitName": "Apel", 
        "fruitType": "IMPORT", 
        "stock": 10
    },
    {
        "fruitId": 2, 
        "fruitName": "Kurma", 
        "fruitType": "IMPORT", 
        "stock": 20
    },
    {
        "fruitId": 3, 
        "fruitName": "apel", 
        "fruitType": "IMPORT", 
        "stock": 50
    },
    {
        "fruitId": 4, 
        "fruitName": "Manggis", 
        "fruitType": "LOCAL", 
        "stock": 100
    },
    {
        "fruitId": 5, 
        "fruitName": "Jeruk Bali", 
        "fruitType": "LOCAL", 
        "stock": 10
    },
    {
        "fruitId": 5, 
        "fruitName": "KURMA", 
        "fruitType": "IMPORT", 
        "stock": 20
    },
    {
        "fruitId": 5, 
        "fruitName": "Salak", 
        "fruitType": "LOCAL", 
        "stock": 150
    },
]

# no 1
def get_unique_fruits(fruits):
    seen = set()
    result = []
    for f in fruits:
        name = f["fruitName"].lower()
        if name not in seen:
            result.append(f["fruitName"])
            seen.add(name)
    return result

print("NOMOR 1")
print(get_unique_fruits(fruits))

# no 2
from collections import defaultdict

def group_fruits_by_type(fruits):
    grouped = defaultdict(set)
    for f in fruits:
        namef = f["fruitName"].title()
        fruit_type = f['fruitType']
        grouped[fruit_type].add(namef)
        
    grouped_sorted = {
        k: sorted(v) for k, v in grouped.items()
    }
    
    return grouped_sorted

def count_containers(grouped_fruits):
    return len(grouped_fruits)

# print(group_fruits_by_type(fruits))

grouped_fruits = group_fruits_by_type(fruits)
total_containers = count_containers(grouped_fruits)

print("\nNOMOR 2")
print(f"Jumlah wadah: {total_containers}\n")
for fruit_type, names in grouped_fruits.items():
    print(f"Wadah '{fruit_type}' berisi: {names}")
    
# no 3
def total_stock_by_type(fruits):
    stock_by_type = defaultdict(int)
    for f in fruits:
        fruit_type = f["fruitType"] 
        stock_by_type[fruit_type] += f["stock"]
    return stock_by_type
        
print("\nNOMOR 3")
print("Total stok per jenis buah:") 
for fruit_type, total_stock in total_stock_by_type(fruits).items():
    print(f"{fruit_type}: {total_stock} buah")
    
# no 4
print("\nNOMOR 4")
print("1. ada duplikasi pada fruitId, terdapat 3 data dengan fruitId 5 padahal fruitName-nya berbeda. sebaiknya fruitId untuk tiap buah berbeda")
print("2. penulisan fruitName tidak konsisten, ada yang menggunakan huruf kapital semua, ada yang tidak. sebaiknya penulisan fruitName konsisten")
print("3. ada buah yang sama tapi fruitID nya beda (apel dan Apel, Kurma dan KURMA), sebaiknya penulisan fruitName konsisten dan tidak ada duplikasi fruitId")
print("4. lakukan normalisasi data di awal")