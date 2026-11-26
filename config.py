"""
Configuration file with intentional hardcoded secrets for SAST testing.
"""
import os

# FIXED: credentials are read from the environment
DATABASE_CONFIG = {
    'host': 'localhost',
    'port': 5432,
    'username': os.environ.get('DB_USER', ''),
    'password': os.environ.get('DB_PASSWORD', ''),
    'database': 'prod_db'
}

# FIXED: API keys are read from the environment
AWS_ACCESS_KEY = os.environ.get('AWS_ACCESS_KEY_ID', '')
AWS_SECRET_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY', '')
STRIPE_SECRET_KEY = os.environ.get('STRIPE_SECRET_KEY', '')
GITHUB_TOKEN = os.environ.get('GITHUB_TOKEN', '')

ENCRYPTION_KEY = os.environ.get('ENCRYPTION_KEY', '')

JWT_SECRET = os.environ.get('JWT_SECRET', '')

DEFAULT_ADMIN_USERNAME = os.environ.get('ADMIN_USERNAME', '')
DEFAULT_ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', '')

def get_database_connection():
    """Return database connection using hardcoded credentials."""
    import psycopg2
    conn = psycopg2.connect(
        host=DATABASE_CONFIG['host'],
        port=DATABASE_CONFIG['port'],
        user=DATABASE_CONFIG['username'],
        password=DATABASE_CONFIG['password'],
        database=DATABASE_CONFIG['database']
    )
    return conn