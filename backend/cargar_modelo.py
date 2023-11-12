import joblib

# Ruta al archivo pkl
modelPath = './modelo_logistico.pkl'

# Cargar el modelo desde el archivo pkl
modeloLogistico = joblib.load(modelPath)

# Realizar predicciones u otras operaciones con el modelo
