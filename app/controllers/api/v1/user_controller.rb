class Api::V1::UserController < ApplicationController
    def index
        @data = User.all
    end
    
    def createUser
        User.create(name: params[:user]["name"].to_s,email: params[:user]["email"].to_s,role: params[:user]["role"].to_s)
        render json: 'success'
    end
    def show
        @data = User.all
        puts @data.inspect
        render json: @data
    end
    def delete
        data = User.find_by(id: params[:id]) # Use find_by to find the user
        puts data.inspect
        data.destroy

    end
    def update
        puts "----------------------------update"
        puts params[:id].to_s
        data = User.find_by(id: params[:id])
        data.update(name: params[:user]["name"].to_s,email: params[:user]["email"].to_s,role: params[:user]["role"].to_s)
        render  json: data
    end


end
