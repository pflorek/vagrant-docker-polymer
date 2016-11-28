Vagrant.configure(2) do |config|

  config.vm.box = "bento/ubuntu-16.04"

  # https://github.com/mitchellh/vagrant/issues/7648
  config.vm.provider "virtualbox" do |v|
    v.customize ['modifyvm', :id, '--cableconnected1', 'on']
  end

  config.vm.network :forwarded_port, host: 8080, guest: 8080

  config.vm.synced_folder "./vagrant", "/vagrant", :mount_options => ["dmode=777","fmode=777"]
  config.vm.synced_folder "./app", "/vagrant/app", :mount_options => ["dmode=777","fmode=777"]

  config.vm.provision :shell, path: "./vagrant/bootstrap.sh"
  config.vm.provision :shell, path: "./vagrant/provision.sh", run: "always"
end
