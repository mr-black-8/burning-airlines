json.extract! @user, :id, :name, :email, :password_digest, :created_at, :updated_at
json.reservations @user.reservations, :row, :column, :user_id, :flight_id
