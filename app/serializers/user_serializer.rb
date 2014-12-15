class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :emali, :remark, :description
  
end
